import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    header?: string,
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
	autofocus?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
	const { 
		className = '', 
		type = 'text', 
		header,
		value, 
		onChange, 
		placeholder, 
		autofocus = false,
	} = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);
    
	return (
		<div className={classNames(cls.Input, {}, [className])}>
			{header ? <p className={cls.header}>{header}</p> : null}
			<input 
				type={type}
				value={value}
				onChange={onChangeHandler} 
				placeholder={placeholder}
				autoFocus={autofocus}
			/>
		</div>
	);
};
