import { Button } from './Button';

import '../styles/sidebar-button.scss'

interface ISideBarButtonProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  },
  handleClickButton: any,
  selectedGenreId: number
}

export function SideBarButton(props: ISideBarButtonProps) {
  return (
      <div className="buttons-container">
        <Button
          key={String(props.genre.id)}
          title={props.genre.title}
          iconName={props.genre.name}
          onClick={() => props.handleClickButton(props.genre.id)}
          selected={props.selectedGenreId === props.genre.id}
        />
      </div>
  )
}