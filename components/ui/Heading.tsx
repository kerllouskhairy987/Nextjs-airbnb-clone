type TProps = {
    title: string
}

const Heading = ({ title }: TProps) => {
    return (
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    )
}

export default Heading