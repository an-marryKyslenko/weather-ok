const ErrorMessage = ({message}: {message: string}) => {
	return (
		<div 
			className={`bg-red-300 p-4 absolute -bottom-15 -left-40 order-2 rounded-2xl transition-all duration-300 ${message ? 'opacity-50 left-0' : 'opacity-0 -left-40'}`}
		>{message }</div>
	)
}

export default ErrorMessage;