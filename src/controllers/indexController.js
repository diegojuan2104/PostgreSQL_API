const ServicePG = require('../services/postgresql');
let _servicioPG = new ServicePG();

let postUsers = async (req, res) => {
	try {
		const user = req.body;
		let sql = 'INSERT INTO public."User"(id, username, password)VALUES ($1,$2,$3)';
		await _servicioPG.executeQuery(sql, [user.id, user.username, user.password]);
		res.status(200).send('User Created!');
	} catch (error) {
		console.log(error);
		res.status(404).send('Error');
	}
};

const getUsers = async (req, res) => {
	try {
		const response = await _servicioPG.executeQuery('SELECT * FROM public."User"');
		res.status(200).json(response.rows);
	} catch (error) {
		res.status(404).send('Error');
	}
};

module.exports = { getUsers, postUsers };
