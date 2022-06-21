export interface CreateUserDto {
  readonly email: string;
  readonly password: string;
}

export interface UserDto extends CreateUserDto {
  readonly createdDate: Date;
}
