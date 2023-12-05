import { useState } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { Button, ThemeButton } from '../button/Button';
import { control_icons } from '@/shared/assets/icons/controls';

export interface SelectOption {
    value: string;
}

interface SelectProps {
    className?: string;
    selected?: SelectOption;
    options?: SelectOption[];
	onSelect?: (selected: SelectOption) => void;
    RenderWith?: React.ElementType;
}

export const Select = ({ className = '', selected, onSelect, options = [], RenderWith }: SelectProps) => {
	const [visible, setVisible] = useState<boolean>(false);

	const handleClick = (option: SelectOption) => {
		onSelect?.(option)
		setVisible(false);
	}
	
	const handleItemKey = (e: React.KeyboardEvent<HTMLLIElement>, option: SelectOption) => { 
		if (e.key === 'Enter') onSelect?.(option); 
	}

	return (
		<div className={classNames(cls.Select, {}, [className])}>
			<Button 
				theme={ThemeButton.CLEAR} 
				className={classNames('', {[cls.border_bottom]: visible}, [cls.selected, cls.shadow])} 
				onClick={() => setVisible(!visible)}
			>
				{RenderWith && selected ? <RenderWith {...selected} /> : 'Select an option'}
				<div className={classNames(cls.indicator, {[cls.transformed]: visible}, [])}>
					<img src={control_icons.select} alt="" />
				</div>
			</Button>
			<ul className={classNames(cls.options, {[cls.visible]: visible}, [cls.shadow])}>
				{options.map((option) => (
					<li 
						key={option.value} 
						tabIndex={0} 
						onClick={() => handleClick(option)} 
						onKeyDown={(e) => handleItemKey(e, option)}
					>
						{RenderWith ? <RenderWith {...option} /> : option.value}
					</li>
				))}
			</ul>
		</div>
	);
};
