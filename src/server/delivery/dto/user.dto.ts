export interface UserCreateRequest {
	name: string;
	email: string;
	password: string;
}

export interface UserResponse {
	id: string;
	name: string;
	email: string;
}
