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
      <div class="display">{{ obj.display }}</div>
      <div class="keyboard">
        <div class="key option" @click="clear">AC</div>
        <div class="key option" @click="sign">+/-</div>
        <div class="key option" @click="addOperator('%')">%</div>
        <div class="key operator" @click="addOperator('/')">/</div>
        <div class="key number" @click="addNum(7)">7</div>
        <div class="key number" @click="addNum(8)">8</div>
        <div class="key number" @click="addNum(9)">9</div>
        <div class="key operator" @click="addOperator('*')">x</div>
        <div class="key number" @click="addNum(4)">4</div>
        <div class="key number" @click="addNum(5)">5</div>
        <div class="key number" @click="addNum(6)">6</div>
        <div class="key operator" @click="addOperator('-')">-</div>
        <div class="key number" @click="addNum(1)">1</div>
        <div class="key number" @click="addNum(2)">2</div>
        <div class="key number" @click="addNum(3)">3</div>
        <div class="key operator" @click="addOperator('+')">+</div>
        <div class="key number zero" @click="addNum(0)">0</div>
        <div class="key number" @click="addPoint">.</div>
        <div class="key operator" @click="getRes">=</div>
      </div>
    </div>
    <div class="test">
      <div>display: {{ obj.display }}</div>
      <div>num1: {{ obj.num1 }}</div>
      <div>num2: {{ obj.num2 }}</div>
      <div>operator: {{ obj.operator }}</div>
      <div>res: {{ obj.res }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        display: "",
        num1: "",
        num2: "",
        operator: "",
        res: "",
      },
    };
  },

  methods: {
    addNum(num) {
      if (this.obj.operator) {
        this.obj.num2 += num;
        this.obj.display = this.obj.num2;
      } else {
        this.obj.num1 += num;
        this.obj.display = this.obj.num1;
      }
    },

    addOperator(operator) {
      if (this.obj.num2) {
        this.obj.num1 = +this.obj.num1 + +this.obj.num2;
        this.obj.display = this.obj.num1;
        this.obj.num2 = "";
      }
      this.obj.operator = operator;
    },

    getRes() {
      switch (this.obj.operator) {
        case "+":
          this.obj.res = +this.obj.num1 + +this.obj.num2;
          this.obj.display = this.obj.res;
          this.obj.num1 = this.obj.res;
          this.obj.num2 = "";
          break;

        case "-":
          this.obj.res = +this.obj.num1 - +this.obj.num2;
          this.obj.display = this.obj.res;
          this.obj.num1 = this.obj.res;
          break;

        case "*":
          this.obj.res = +this.obj.num1 * +this.obj.num2;
          this.obj.display = this.obj.res;
          this.obj.num1 = this.obj.res;
          break;

        case "/":
          this.obj.res = +this.obj.num1 / +this.obj.num2;
          this.obj.display = this.obj.res;
          this.obj.num1 = this.obj.res;
          break;

        case "%":
          this.obj.res = (+this.obj.num1 * +this.obj.num2) / 100;
          this.obj.display = this.obj.res;
          this.obj.num1 = this.obj.res;
          break;

        default:
          break;
      }
    },

    clear() {
      this.obj.display = "";
      this.obj.num1 = "";
      this.obj.num2 = "";
      this.obj.operator = "";
      this.obj.res = "";
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
  width: 10%;
  margin: 10px auto;
  border: 1px solid #000;
}
</style>
