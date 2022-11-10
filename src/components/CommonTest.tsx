import styles from "../scss/components/Test.module.scss";
import classNames from "classnames/bind";
const st = classNames.bind(styles);

const CommonTest = () => {
  return (
    <div>
      {/* test: .scss (global) */}
      <span className="test">hellow there가나다라마바사 괅0</span>

      {/* layout */}
      <div className="flex-space-between">
        {/* test: module.scss with classNames.bind (local) */}
        <div className={st("test")}>test rkskekfak가만아라히아</div>

        {/* test: local.module.scss + global.scss (multi) */}
        <div className={st("test", "border", "fw700 fs36")}>
          test rkskekfak가만아라히아
        </div>
      </div>

      {/* font weight */}
      <div className="flex-center fw100 fs14">test: font-weight 100</div>
      <div className="flex-center fw200 fs14">test: font-weight 200</div>
      <div className="flex-center fw300 fs14">test: font-weight 300</div>
      <div className="flex-center fw400 fs14">test: font-weight 400</div>
      <div className="flex-center fw500 fs14">test: font-weight 500</div>
      <div className="flex-center fw600 fs14">test: font-weight 600</div>
      <div className="flex-center fw700 fs14">test: font-weight 700</div>
      <div className="flex-center fw800 fs14">test: font-weight 800</div>
      <div className="flex-center fw900 fs14">test: font-weight 900</div>

      {/* font size */}
      <div className="fs12">test: font-size 12</div>
      <div className="fs14">test: font-size 14</div>
      <div className="fs16">test: font-size 16</div>
      <div className="fs18">test: font-size 18</div>
      <div className="fs20">test: font-size 20</div>
      <div className="fs24">test: font-size 24</div>
      <div className="fs28">test: font-size 28</div>
      <div className="fs32">test: font-size 32</div>
      <div className="fs36">test: font-size 36</div>
    </div>
  );
};

export default CommonTest;
