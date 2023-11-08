// import { Client } from "@vercel/postgres";

// export async function POST(req: Request, res: Response) {
// 	if (req.method === "POST") {
// 		const { username, email, password } = req.body;

// 		const client = new Client({
// 			user: "your_db_user",
// 			host: "your_db_host",
// 			database: "your_db_name",
// 			password: "your_db_password",
// 			port: 5432, // Default PostgreSQL port
// 		});

// 		try {
// 			await client.connect();

// 			const query = `
// 			INSERT INTO user (username, email, password)
// 			VALUES ($1, $2, $3)
// 		  `;

// 			await client.query(query, [username, email, password]);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// }
