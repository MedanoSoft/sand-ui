export default function uidCreator() {
	let d = new Date();
	return '$s'.concat(d.getMinutes()).concat(d.getDate());
};
