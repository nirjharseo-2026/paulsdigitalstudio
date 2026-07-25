import { useCMS } from '../context/CMSContext';
import { Mail, MailOpen, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

export function MessagesManager() {
  const { messages, markMessageRead, deleteMessage } = useCMS();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold">Contact Messages</h1>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        {messages.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No messages yet.
          </div>
        ) : (
          <div className="divide-y divide-border">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-6 flex flex-col md:flex-row gap-6 hover:bg-muted/30 transition-colors ${!msg.read ? 'bg-primary/5' : ''}`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`text-lg ${!msg.read ? 'font-bold' : 'font-medium'}`}>{msg.name}</h3>
                      <div className="text-sm text-muted-foreground">{msg.email}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(msg.date).toLocaleDateString()} {new Date(msg.date).toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                      {msg.service}
                    </span>
                    <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>

                <div className="flex md:flex-col items-center justify-end gap-2 shrink-0">
                  {!msg.read && (
                    <button
                      onClick={() => markMessageRead(msg.id)}
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="Mark as Read"
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                  )}
                  {msg.read && (
                    <button
                      disabled
                      className="p-2 text-muted-foreground opacity-50 rounded-lg cursor-not-allowed"
                      title="Read"
                    >
                      <MailOpen className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this message?')) {
                        deleteMessage(msg.id);
                      }
                    }}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    title="Delete Message"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
