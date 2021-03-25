import { SideBarButton } from './SideBarButton';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISideBarProps {
  genres: GenreResponseProps[];
  setSelectedGenreId: any,
  selectedGenreId: number
}

export function SideBar(props: ISideBarProps) {
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
     <span>Watch<p>Me</p></span>
      {props.genres.map(genre => (
        <SideBarButton genre={genre} handleClickButton={handleClickButton} selectedGenreId={props.selectedGenreId}/>
      ))}
    </nav>
  )
}