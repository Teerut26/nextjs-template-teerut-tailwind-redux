import Head from "next/head";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/actions/conterActions";

function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2 w-full h-screen items-center justify-center">
        <div className="w-full flex justify-center">
          <div className="font-bold text-3xl bg-gradient-to-r from-sky-300 to-pink-300 text-transparent bg-clip-text bg-animate">Nextjs + Tailwindcss + Redux</div>
        </div>

        <div className="w-full flex flex-col justify-center w-96 gap-2">
          <h1>Counter : {props.counter}</h1>

          <button
            className="px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg"
            onClick={props.incrementCounter}
          >
            Increment Counter
          </button>
          <button
            className="px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg"
            onClick={props.decrementCounter}
          >
            Decrement Counter
          </button>
        </div>
      </div>
    </div>
  );
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
