// src/app/page.tsx   ← ये फाइल बनाओ और सिर्फ ये कोड पेस्ट करो
import SiteLayout from './site/layout';
import HomePage from './site/page';

export default function RootPage() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}