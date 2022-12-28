const { userService } = require("../src/services");
const { adminUsers } = require("./data/admin-users");

const createAdmins = async () => {
  console.log("adminData 생성중");
  try {
    const admins = await Promise.all(
      adminUsers.map(async (user) => {
        return await userService.create(user);
      })
    );
    return admins;
  } catch {
    console.error("admin 계정 생성 실패");
  }
  console.error("admin 계정 생성 성공");
};

module.exports = { createAdmins };
