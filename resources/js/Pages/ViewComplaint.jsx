import React from 'react';
import { usePage } from '@inertiajs/react';

export default function ComplaintView() {
  const { complaint } = usePage().props;

  if (!complaint) {
    return (
      <div
        style={{
          maxWidth: 700,
          margin: '3rem auto',
          fontFamily:
            "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: '#f5f7fa',
          padding: '1.5rem',
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center',
          color: '#64748b',
        }}
      >
        No complaint data available.
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 700,
        margin: '3rem auto',
        fontFamily:
          "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundColor: '#f5f7fa',
        padding: '1.5rem',
        borderRadius: 16,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
    >
      <header
        style={{
          marginBottom: '2rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '1.75rem',
            color: '#1e293b',
            margin: 0,
            fontWeight: 700,
          }}
        >
          Complaint Details
        </h2>
        <span
          style={{
            padding: '0.4rem 1rem',
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: '0.875rem',
            backgroundColor:
              complaint.status === 'Open'
                ? '#d1fae5'
                : complaint.status === 'Pending'
                ? '#fef3c7'
                : complaint.status === 'Resolved'
                ? '#bbf7d0'
                : '#fee2e2',
            color:
              complaint.status === 'Open'
                ? '#065f46'
                : complaint.status === 'Pending'
                ? '#92400e'
                : complaint.status === 'Resolved'
                ? '#047857'
                : '#b91c1c',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            userSelect: 'none',
          }}
        >
          {complaint.status}
        </span>
      </header>

      <section
        style={{
          marginBottom: '1.75rem',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          rowGap: '1rem',
          columnGap: '2rem',
          color: '#475569',
        }}
      >
        <div style={{ fontWeight: '600' }}>Category:</div>
        <div>{complaint.category_name || 'Unknown'}</div>

        <div style={{ fontWeight: '600' }}>User ID:</div>
        <div>{complaint.resident_id || 'Unknown'}</div>

        <div style={{ fontWeight: '600' }}>User Name:</div>
        <div>
          {complaint.first_name && complaint.last_name
            ? `${complaint.first_name} ${complaint.last_name}`
            : 'Unknown'}
        </div>

        <div style={{ fontWeight: '600' }}>Submitted At:</div>
        <div>
          {complaint.created_at
            ? new Date(complaint.created_at).toLocaleString()
            : 'Unknown'}
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '1.5rem',
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#334155',
          whiteSpace: 'pre-wrap',
          minHeight: 100,
        }}
      >
        {complaint.message || 'No message content.'}
      </section>
    </div>
  );
}
