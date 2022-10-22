import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UserController>{
  constructor(){
    super(UserController)
  }

  routes(): void {
    this.router.get('/login', (res, req) => this.controller.getUsers(res, req))
  };
}