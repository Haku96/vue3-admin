import Mock from "mockjs";
import setupMock, { successResponseWrap } from "@/utils/setup-mock";

setupMock({
  setup() {
    Mock.mock(new RegExp("/api/user/logout"), () => {
      return successResponseWrap("logout succeed");
    });
  },
});
