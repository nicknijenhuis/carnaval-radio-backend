module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'cr-backend'),
			user: env('DATABASE_USERNAME', 'u'),
			password: env('DATABASE_PASSWORD', 'pwd'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
