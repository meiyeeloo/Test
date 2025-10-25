import { Button } from '../../components/Button';
import { PageContent } from '../../components/PageContent';
import { Group } from '../../components/Group';
import { Link } from '../../components/Link';

interface ButtonPageProps {
  onNavigate: (page: string) => void;
}

export function ButtonPage({ onNavigate }: ButtonPageProps) {
  return (
    <PageContent>

      <Group variant="hor-24">
        <Link href="#" onClick={(e) => { e.preventDefault(); onNavigate('page1'); }}>Button</Link>
        <Link href="#" onClick={(e) => { e.preventDefault(); onNavigate('page2'); }}>Link</Link>
      </Group>

      <Group variant="ver-24">
        <Button variant="solid">Button</Button>
        <Button variant="solid" disabled>Button</Button>       
        <Button variant="outlined">Button</Button>
        <Button variant="outlined" disabled>Button</Button>
      </Group>
      
      <Group variant="hor-24">
        <Button variant="solid">Button</Button>
        <Button variant="solid" disabled>Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="outlined" disabled>Button</Button>
      </Group>

    </PageContent>
  );
}