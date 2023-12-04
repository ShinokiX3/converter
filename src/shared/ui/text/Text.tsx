import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
	className?: string;
    title?: string;
    text?: string;
}

export const Text = ({ className = '', title, text }: TextProps) => {
	return (
		<div className={classNames(cls.Text, {}, [className])}>
			{title ? <h2 className={cls.title}>{title}</h2> : null}
			{text ? <p className={cls.text}>{text}</p> : null}
		</div>
	);
};
