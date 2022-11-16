import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') // globel prifix route
export class AuthController {
    
    constructor(private authService: AuthService) {}

    // POST /auth/signup
    @Post('signup') // route from which thsi function will be called
    signup() {
        return this.authService.signup();
    }

    // POST /auth/signin
    @Post('signin') // oute from which thsi function will be called
    signin() {
        return this.authService.signin();
    }
}