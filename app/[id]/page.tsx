import React from 'react'
import { loadUserData, getAllUserIds } from '@/utils/loadUserData'
import JSONResumeView from '@/components/JSONResumeView'
import { NavigationBar } from '@/components/NavigationBar'

export async function generateStaticParams() {
  const ids = await getAllUserIds();
  return ids.map(id => ({ id }));
}

export default async function UserProfile({ params }: { params: { id: string } }) {
  let userData = await loadUserData(params.id);

  if (!userData) {
    userData = await loadUserData('fake');
  }

  return (
    <div className="min-h-screen">
      <NavigationBar />
      <JSONResumeView resumeData={userData!} />
    </div>
  );
}
