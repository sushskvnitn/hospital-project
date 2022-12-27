module.exports = {
	apps: [
		{
			name: "api",
			cwd: "~/app/server",
			script: "index.js",
			watch: true,
			ignore_watch: ["node_modules", "server/node_modules", "build"],
			max_restart: 10,
			time: true,
		},
	],
};
