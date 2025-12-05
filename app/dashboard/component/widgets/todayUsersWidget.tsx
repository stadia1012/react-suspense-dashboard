import BaseWidget from "./baseWidget";

export default function TodayUsersWidget() {
  return (
    <BaseWidget>
      <h2 className="text-[17px] font-bold">가입자 수</h2>
      <p className="text-[16px]">1,000명</p>
    </BaseWidget>
  );
}