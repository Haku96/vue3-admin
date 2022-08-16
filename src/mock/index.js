// Mock.js will intercept the ajax request. If there is a matching mock
// rule, the ajax will not be sent out, but the mock data will be returned
import Mock from "mockjs";

import "./user";

Mock.setup({
  timeout: "600-1000",
});
