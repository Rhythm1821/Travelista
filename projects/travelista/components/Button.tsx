
type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: 'btn_dark_green' | 'btn_dark_blue' | 'btn_light_green' | 'btn_light_blue'
}

const Button = ({ type, title, icon, variant}: ButtonProps) => {
    return (
        <button 
        className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}>
            {icon && <img src={icon} alt={title} height={24} width={24}/>}
            <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    )
}

export default Button