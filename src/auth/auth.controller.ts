import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth') // globel prifix route
export class AuthController {
    
    constructor(private authService: AuthService) {}

    // POST /auth/signup
    @Post('signup') // route from which thsi function will be called
    signup(@Body() dto: AuthDto) {
        console.log({dto})
        return this.authService.signup(dto);
    }

    // POST /auth/signin
    @Post('signin') // oute from which thsi function will be called
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}