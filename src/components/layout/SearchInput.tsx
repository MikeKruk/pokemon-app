import { Input } from '../ui/input';

interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
}
export default function SearchInput({ value, onChange }: SearchInputProps) {
	return (
		<div className='flex justify-center mb-4'>
			<Input
				className='w-full max-w-md'
				aria-label='Search pokémon'
				placeholder='Search pokémon'
				type='search'
				onChange={e => onChange(e.target.value)}
				value={value}
			/>
		</div>
	);
}
