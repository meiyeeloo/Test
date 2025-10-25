import { PageContent } from '../../components/PageContent';
import { Group } from '../../components/Group';
import { Link } from '../../components/Link';

interface LinkPageProps {
  onNavigate: (page: string) => void;
}

export function LinkPage({ onNavigate }: LinkPageProps) {
  return (
    <PageContent>
      
      <Group variant="hor-24">
        <Link href="#" onClick={(e) => { e.preventDefault(); onNavigate('page1'); }}>Button</Link>
        <Link href="#" onClick={(e) => { e.preventDefault(); onNavigate('page2'); }}>Link</Link>
      </Group>

      <Group variant="hor-24">
        <Link href="#">Link</Link>
      </Group>
      
    </PageContent>
  );
}