<template>
  <section class="view-create-coffee">
    <h1 class="view-create-coffee__title">Ваш конструктор:</h1>
    <form class="view-create-coffee__form" @submit.prevent="submitForm">
      <ingredient-list
        :ingredientList="ingredientList"
        :choseIngredients="form.ingredients"
        @setIngredients="setIngredients"
      ></ingredient-list>
      <div class="view-create-coffee__specification">
        <base-input
          placeholder="Название напитка"
          class="view-create-coffee__specification-input view-create-coffee__specification-title"
          :value="form.title"
          @setValue="inputTitle"
        ></base-input>
        <base-input
          class="view-create-coffee__specification-input view-create-coffee__specification-name"
          disabled
          :value="form.price"
          @setValue="inputPrice"
        ></base-input>
        <textarea
          class="view-create-coffee__specification-description"
          placeholder="Расскажите, как его приготовить"
          v-model="form.description"
        ></textarea>
        <button type="submit" class="view-create-coffee__button">
          Приготовить!
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import IngredientList from "../components/IngredientList";
import BaseInput from "../components/Base/Input";
export default {
  name: "ViewCreateCoffee",
  components: {
    IngredientList,
    BaseInput,
  },
  data() {
    return {
      form: {
        price: "199p",
        title: "",
        description: "",
        ingredients: [],
        img: "Espresso.jpg",
      },
    };
  },
  created() {
    this.$store.dispatch("getIngredientList");
  },
  computed: {
    ingredientList() {
      return this.$store.state.Ingredients.ingredients;
    },
  },
  methods: {
    submitForm() {
      const nanoid = require("nanoid");
      this.form.id = nanoid(5);

      if (this.form.title && this.form.description) {
        this.$store.dispatch("addCoffeeToCart", this.form);
        this.$router.push({ name: "coffeeList" });
      } else {
        alert("Заполните, пожалуйста, данные по напитку");
      }
    },
    inputPrice(value) {
      return (this.form.price = value);
    },
    inputTitle(value) {
      return (this.form.title = value);
    },
    setIngredients(value) {
      return (this.form.ingredients = value);
    },
  },
};
</script>

<style lang="scss">
.view-create-coffee {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  &__title {
    font-size: 50px;

    margin-bottom: 40px;
    margin-top: 20px;
  }

  &__form {
    display: flex;
    justify-content: space-between;
  }

  &__specification {
    display: flex;
    flex-direction: column;

    max-width: 260px;
    width: 100%;
  }

  &__specification-input {
    border-radius: 7px;
    border: 1px solid $blue;

    font-size: 20px;

    height: 50px;

    margin-bottom: 30px;
    padding-left: 15px;
    padding-right: 5px;

    &::placeholder {
      font-size: 15px;
    }
  }

  &__specification-description {
    border-radius: 7px;
    border: 1px solid $blue;

    margin-bottom: 30px;
    padding: 10px 15px;

    height: 160px;

    font-size: 20px;

    resize: none;

    &::placeholder {
      font-size: 15px;
    }
  }

  &__button {
    width: 70%;

    padding: 10px 15px;

    align-self: center;

    border-radius: 7px;
    border: 1px solid $color-border;

    font-size: 20px;

    color: $color-text;
    background-color: #ffffff;
  }
}
</style>
