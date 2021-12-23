import Nav from "../Components/Nav";

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			{ children }
		</>
	)
}