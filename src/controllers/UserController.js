import Mail from "../app/lib/Mail.js";

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        await Mail.sendMail({
            from: "Queue test <queue@queuetest.com.br>",
            to: `${user.name} <${user.email}>`,
            subject: "Email de teste",
            html: "asdasdasd"
        });

        return res.json(user);
    }
}