import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	SO_CLEAR = 'so_clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: ThemeButton;
    shadow?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { className = '', children, theme = ThemeButton.OUTLINE, shadow = false, ...otherProps } = props;
    
	return (
		<button className={classNames(cls.Button, {[cls.shadow]: shadow}, [cls[theme], className])} {...otherProps}>
			{children ? children : null}
		</button>
	);
};
