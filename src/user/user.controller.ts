import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './Entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// ValidationPipe:  sınıf  doğrulayıcı  kitaplığını  kullanarak  istek  doğrulamasını  sağlar
// ParseIntPipe:  rota  parametresini  bir  sayı  türüne  ayrıştırır.  
// ParseBoolPipe:  rota  parametresini  bir  boole  türüne  ayrıştırır.  
// ParseArrayPipe:  rota  parametresini  belirli  bir  türdeki  diziye  ayrıştırır.  
// ParseUUIDPipe:  rota  parametresini  sağlanan  bir  sürümün  UUID'sine  ayrıştırır. 
// DefaultValuePipe:  rotada  herhangi  bir  değer  sağlanmadığı  takdirde  varsayılan  bir  değere  izin  verir.

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.', type: [User] })
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get user by id' })
    @ApiResponse({ status: 200, description: 'Return user by id.', type: User })
    async findOne(@Param('id',ParseIntPipe) id: string): Promise<User> {
        return await this.userService.findOne(+id);
    }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: User })
    async create(@Body() user: CreateUserDto): Promise<User> {
        return await this.userService.create(user);
    }

    @Post('/create-all')
    async createAll(@Body() users: CreateUserDto[]): Promise<User[]> {
        return await this.userService.createAll(users);
    }
    
    @Put(':id')
    @ApiOperation({ summary: 'Update user' })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.', type: User })
    async update(@Param('id', ParseIntPipe) id: string, @Body() userDto: UpdateUserDto): Promise<void> {
        return await this.userService.update(+id, userDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete user' })
    @ApiResponse({ status: 200, description: 'The user has been successfully deleted.', type: User })
    async remove(@Param('id') id: string): Promise<void> {
        return await this.userService.remove(+id);
    }
}
