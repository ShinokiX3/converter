import { useState } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { Button, ThemeButton } from '../button/Button';

export interface SelectOption {
    value: string;
}

interface SelectProps {
    className?: string;
    selected?: SelectOption;
    options?: SelectOption[];
    RenderWith?: React.ElementType;
}

export const Select = ({ className = '', selected, options = [], RenderWith }: SelectProps) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<div className={classNames(cls.Select, {}, [className])}>
			<Button 
				theme={ThemeButton.CLEAR} 
				className={classNames('', {[cls.border_bottom]: visible}, [cls.selected, cls.shadow])} 
				onClick={() => setVisible(!visible)}
			>
				{RenderWith ? <RenderWith {...selected} /> : 'Select an option'}
				<div className={cls.indicator}>{'+'}</div>
			</Button>
			<ul className={classNames(cls.options, {[cls.visible]: visible}, [cls.shadow])}>
				{options.map((option) => (
					<li key={option.value} tabIndex={0}>
						{RenderWith ? <RenderWith {...option} /> : option.value}
					</li>
				))}
			</ul>
		</div>
	);
};
