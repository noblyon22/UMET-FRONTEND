import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { updateMe, changePassword } from '@/services/userService';
import { ChangePasswordPayload } from '@/types/user';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.full_name ?? '');
  const [profileMsg, setProfileMsg] = useState<string | null>(null);
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  const [pwForm, setPwForm] = useState<ChangePasswordPayload>({
    current_password: '',
    new_password: '',
  });
  const [pwMsg, setPwMsg] = useState<string | null>(null);
  const [isSavingPw, setIsSavingPw] = useState(false);

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingProfile(true);
    setProfileMsg(null);
    try {
      await updateMe({ full_name: fullName });
      setProfileMsg('Profile updated.');
    } catch {
      setProfileMsg('Failed to update profile.');
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwMsg(null);
    setIsSavingPw(true);
    try {
      await changePassword(pwForm);
      setPwMsg('Password changed successfully.');
      setPwForm({ current_password: '', new_password: '' });
    } catch {
      setPwMsg('Failed to change password. Check your current password.');
    } finally {
      setIsSavingPw(false);
    }
  };

  const setPw = (field: keyof ChangePasswordPayload) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setPwForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <PageLayout>
      <Header title="Profile" />

      <div className="max-w-lg flex flex-col gap-8">
        <div className="card">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Personal Information</h2>
          <form onSubmit={handleProfileSave} className="flex flex-col gap-4">
            <Input label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <Input label="Email" value={user?.email ?? ''} disabled helperText="Email cannot be changed." />
            {profileMsg && (
              <p className={`text-sm ${profileMsg.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                {profileMsg}
              </p>
            )}
            <Button type="submit" isLoading={isSavingProfile}>Save Changes</Button>
          </form>
        </div>

        <div className="card">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
            <Input label="Current Password" type="password" value={pwForm.current_password} onChange={setPw('current_password')} required />
            <Input label="New Password" type="password" value={pwForm.new_password} onChange={setPw('new_password')} required />
            {pwMsg && (
              <p className={`text-sm ${pwMsg.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                {pwMsg}
              </p>
            )}
            <Button type="submit" isLoading={isSavingPw}>Change Password</Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
