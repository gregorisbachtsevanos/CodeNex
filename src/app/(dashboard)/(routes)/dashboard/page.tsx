import { sql } from "@vercel/postgres";

export default async function Cart({
	params,
}: {
	params: { user: string };
}): Promise<JSX.Element> {
	await sql`INSERT INTO User (username, email,  password)
    VALUES ('gregoris', 'gregoris@mail.com', 'test123', );`;
	const { rows } = await sql`SELECT * from User`;

	return (
		<div>
			{rows.map((row) => (
				<div key={row.id}>
					{row.id} - {row.quantity}
				</div>
			))}
		</div>
	);
}
