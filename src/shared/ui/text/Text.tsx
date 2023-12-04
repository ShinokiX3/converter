import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
    title?: string;
    text?: string;
}

export const Text = ({ title, text }: TextProps) => {
	return (
		<div className={classNames(cls.Text, {}, [])}>
			{title ? <h2 className={cls.title}>{title}</h2> : null}
			{text ? <p className={cls.text}>{text}</p> : null}
		</div>
	);
};
