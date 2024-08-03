<template>
  <div>
    <div class="wrapper">
      <div class="topbar">
        <div class="time">{{ time }}</div>
        <div>
          <div class="signal">
            <img src="./assets/icons/signal.jpg" alt="signal" width="25" />
          </div>
          <div class="battery">
            <img src="./assets/icons/battery.png" alt="battery" width="30" />
          </div>
        </div>
      </div>
      <div class="display">{{ display }}</div>
      <div class="keyboard">
        <div class="key option" @click="clear">AC</div>
        <div class="key option" @click="sign">+/-</div>
        <div class="key option" @click="getRes('%')">%</div>
        <div class="key operator" @click="getRes('/')">/</div>
        <div class="key number" @click="addNum(7)">7</div>
        <div class="key number" @click="addNum(8)">8</div>
        <div class="key number" @click="addNum(9)">9</div>
        <div class="key operator" @click="getRes('*')">x</div>
        <div class="key number" @click="addNum(4)">4</div>
        <div class="key number" @click="addNum(5)">5</div>
        <div class="key number" @click="addNum(6)">6</div>
        <div class="key operator" @click="getRes('-')">-</div>
        <div class="key number" @click="addNum(1)">1</div>
        <div class="key number" @click="addNum(2)">2</div>
        <div class="key number" @click="addNum(3)">3</div>
        <div class="key operator" @click="getRes('+')">+</div>
        <div class="key number zero" @click="addNum(0)">0</div>
        <div class="key number" @click="addPoint">.</div>
        <div class="key operator" @click="getRes('=')">=</div>
      </div>
    </div>
    <div class="test">
      <div>display: {{ display }}</div>
      <div>num1: {{ num1 }}</div>
      <div>num2: {{ num2 }}</div>
      <div>operator: {{ operator }}</div>
      <div>res: {{ res }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "",
      num1: "",
      num2: "",
      operator: "",
      res: "",
    };
  },

  methods: {
    addNum(num) {
      if (this.operator) {
        this.num2 += num;
        this.display = this.num2;
      } else {
        this.num1 += num;
        this.display = this.num1;
      }
    },

    getRes(operator) {
      if (this.operator) {
        switch (this.operator) {
          case "+":
            this.operator = operator;
            this.num1 = +this.num1 + +this.num2;
            this.display = this.num1;
            this.num2 = "";
            break;

          case "-":
            this.operator = operator;
            this.num1 = +this.num1 - +this.num2;
            this.display = this.num1;
            this.num2 = "";
            break;

          case "*":
            this.operator = operator;
            this.num1 = +this.num1 * +this.num2;
            this.display = this.num1;
            this.num2 = "";
            break;

          case "/":
            this.operator = operator;
            this.num1 = +this.num1 / +this.num2;
            this.display = this.num1;
            this.num2 = "";
            break;

          case "%":
            this.operator = operator;
            this.num1 = (+this.num1 * +this.num2) / 100;
            this.display = this.num1;
            this.num2 = "";
            break;

          case "=":
            if (this.num1 && this.num2) {
              this.res = +this.num1 + +this.num2;
              break;
            }

          default:
            break;
        }
      } else {
        this.operator = operator;
      }
    },

    sign(event) {
      if (!this.num2) {
        this.num1 = -this.num1;
        this.display = this.num1;
      } else {
        this.num2 = -this.num2;
        this.display = this.num2;
      }
    },

    clear() {
      this.num1 = "";
      this.num2 = "";
      this.res = "";
      this.operator = "";
      this.display = "";
    },
  },

  computed: {
    time() {
      return (
        new Date().getHours().toString().padStart(2, "0") +
        ":" +
        new Date().getMinutes().toString().padStart(2, "0")
      );
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  width: min-content;
  height: 500px;
  border: 1px solid #000;
  border-radius: 20px;
  background: black;

  .topbar {
    display: flex;
    align-items: center;
    margin: 15px auto;
    justify-content: space-between;

    .time {
      color: white;
    }
    .signal {
      display: inline;
    }
    .battery {
      display: inline;
    }
  }

  .display {
    position: relative;
    top: 60px;

    height: 40px;

    margin: 0 5px;
    padding: 10px;

    text-align: right;
    font-size: 40px;
    color: #fff;

    border-radius: 20px;
    background: rgb(0, 0, 0);
  }

  .keyboard {
    position: relative;
    top: 60px;

    display: grid;
    gap: 2px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    padding: 5px;
    border-radius: 20px;

    .key {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 50px;
      height: 50px;

      margin: 4px;
      border-radius: 50px;
      font-size: 24px;

      &:hover {
        border: 1px solid #222;
      }
    }
    .option {
      background: #777;
      color: black;
    }

    .operator {
      background: orange;
      color: white;
    }

    .number {
      background: #333;
      color: white;
    }

    .zero {
      grid-column: 1/3;
      width: 93%;
      margin: 5px;
    }
  }
}
.test {
  width: 50%;
  margin: 10px auto;
  border: 1px solid #000;
  color: #fff;
}
</style>
