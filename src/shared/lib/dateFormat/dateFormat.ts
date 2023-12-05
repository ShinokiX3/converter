export interface FormatOptions { [key: string]: string | boolean }

export const dateFormat = (date: Date) => {
	const options: FormatOptions = {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true,
	};
  
	return new Intl.DateTimeFormat('en-US', options).format(date);
}