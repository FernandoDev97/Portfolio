import { ReactNode } from 'react';
import { KnowledgeContainer } from './styles';

interface KnowledgeItemsProps {
  title?: string
  icon?: ReactNode
}

function KnowledgeItems({title, icon}: KnowledgeItemsProps) {
  return (
    <KnowledgeContainer data-aos='fade-up'>
      <p>{title}</p>
      {icon}
    </KnowledgeContainer>
  );
};

export default KnowledgeItems;
