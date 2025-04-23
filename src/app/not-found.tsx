'use client';

import EmptyState from '@/components/organisms/empty-state';

interface NotFoundStateProps {
  error: Error;
}

const NotFound: React.FC<NotFoundStateProps> = ({ error }) => {
  return (
    <EmptyState
      title="Page not found"
      subtitle="Could not find requested resource"
      showReset
      label="Go back home"
    />
  );
};

export default NotFound;
