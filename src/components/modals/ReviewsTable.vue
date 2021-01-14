<template>
  <div>
    <div class="review-name">
      <h1>Atsiliepimai</h1>
    </div>
    <div class="review-container">
      <ul v-for="review in Revs" :key="review.id">
        <li>
          <div class="review">
            <img :src="review.avatar_url" />
            <div class="details">
              <div class="name">
                <p>{{ review.first_name }}</p>
                <p>{{ review.last_name }}</p>
                <div class="rating">
                  <star-rating
                    v-model="review.calculated_rating"
                    v-bind:show-rating="false"
                    v-bind:star-size="20"
                    @rating-selected="setRating($event, review.id, review.content)"
                  ></star-rating>
                </div>
                <div v-if="checkLocalStorage(review.email)" class="delete-review">
                  <h3 @click="toggleClass(review.id)">Edit</h3>
                  <img @click="deleteReview(review.id)" src="../../assets/delete.png" />
                </div>
              </div>
              <div class="date">
                <p>{{ review.created_at }}</p>
              </div>
            </div>
          </div>
          <div class="content" v-if="checkID(review.id)">
            <textarea
              v-bind:class="[isActiveEdit ? 'active-edit' : 'inactive-edit']"
              id="review"
              name="review"
              v-model="review.content"
              maxlength="300"
              required
            />
            <p v-bind:class="[isActiveText ? 'active-text' : 'inactive-text']">{{review.content}}</p>

            <button
              v-bind:class="[isActiveEdit ? 'active-edit' : 'inactive-edit']"
              class="button"
              @click="updateContentField(review.content, review.id)"
            >Update</button>
          </div>
          <div class="content" v-else>
            <p>{{review.content}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import StarRating from "vue-star-rating";
import Vue from "vue";
import Reviews from "./ReviewsTable";

Vue.component("star-rating", StarRating);

export default {
  name: "Reviews",

  mounted() {
    Axios.get("http://192.168.10.253:10004/reviews?offset=0&limit=12").then(
      (response) => (this.Revs = response.data.reviews)
    );
  },

  data() {
    return {
      Revs: [],
      isActiveEdit: false,
      isActiveText: true,
      toggleID: 0,
      rating: 0,
    };
  },

  methods: {
    deleteReview: function (id) {
      Axios.delete("http://192.168.10.253:10004/reviews/" + id).then(function (
        response
      ) {
        if (response.statusText === "OK") {
          alert("Review deleted successfully!");
          window.location.reload();
        }
      });
    },

    checkLocalStorage: function (email, id) {
      if (localStorage.email == email) {
        this.reviewId = id;
        return true;
      } else return false;
    },

    toggleClass: function (id) {
      this.toggleID = id;
      this.isActiveEdit = !this.isActiveEdit;
      this.isActiveText = !this.isActiveText;
    },

    checkID: function (id) {
      if (id == this.toggleID) {
        return true;
      } else return false;
    },

    updateContentField: function (newContent, id) {
      Axios.put("http://192.168.10.253:10004/reviews/" + id, {
        content: newContent,
      }).then(function (response) {
        if (response.statusText === "OK") {
          alert("Review updated successfully!");
          window.location.reload();
        }
      });
    },

    setRating: function (rating, id, oldContent) {
      console.log(rating);
      console.log(id);
      console.log(oldContent);
      Axios.put("http://192.168.10.253:10004/reviews/" + id, {
        calculated_rating: rating,
        times_rated: +1,
        rates_sum: +rating,
        content: oldContent,
      }).then(function (response) {
        if (response.statusText === "OK") {
          alert("Thank you!");
        }
      });
    },
  },
};
</script>

<style scoped>
.review-container {
  position: relative;
}

.review-name {
  margin-top: 70px;
  padding: 10px 0;

  border-bottom: 1px solid #bdbdbd;
}
.review-name h1 {
  font-size: 24px;
  font-weight: 300;

  color: #828282;
}

.review-container ul {
  list-style-type: none;
  margin-top: 30px;
}

.review img {
  height: 42px;
  width: 42px;
  margin-right: 20px;
}

.review {
  display: flex;
}

.name {
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: #4f4f4f;
}

.name p:first-of-type {
  margin-right: 10px;
}

.rating {
  margin-left: 30px;
}

.date {
  font-size: 14px;
  margin-top: 5px;
  color: #bdbdbd;
}

.content {
  margin-top: 20px;
  margin-bottom: 40px;

  font-size: 14px;
}

.content textarea {
  resize: none;
  width: 100%;
  height: 100px;

  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 5px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.content button {
  margin-top: 15px;
  float: right;
  height: 30px;
  width: 10%;
  font-size: 14px;
  text-transform: uppercase;

  background: #0054a6;
  color: #f2f2f2;

  cursor: pointer;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.delete-review {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
}

.delete-review h3 {
  margin-right: 30px;
  font-size: 14px;
  font-weight: 300;
  color: #0054a6;
  cursor: pointer;
}

.delete-review img {
  height: 18px;
  width: auto;
  cursor: pointer;
}

.active-text,
.active-edit {
  display: block;
}
.inactive-text,
.inactive-edit {
  display: none;
}
</style>
