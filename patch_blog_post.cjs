const fs = require('fs');
let code = fs.readFileSync('src/pages/BlogPost.tsx', 'utf-8');

const placeholderContent = `{/* Placeholder content since we only store excerpts right now */}
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3>Key Insights</h3>
          <ul>
            <li>First important point about {post.category.toLowerCase()}</li>
            <li>Second crucial aspect of the topic</li>
            <li>Third perspective on {post.title}</li>
          </ul>
          
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <blockquote>
            "The future belongs to those who prepare for it today, and understanding {post.category.toLowerCase()} is the first step."
          </blockquote>
          
          <h2>Conclusion</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>`;

const replacementContent = `{post.content ? (
            <div className="whitespace-pre-wrap">{post.content}</div>
          ) : (
            <>
              {/* Fallback to placeholder if no content */}
              <h2>Introduction</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h3>Key Insights</h3>
              <ul>
                <li>First important point about {post.category.toLowerCase()}</li>
                <li>Second crucial aspect of the topic</li>
                <li>Third perspective on {post.title}</li>
              </ul>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <blockquote>
                "The future belongs to those who prepare for it today, and understanding {post.category.toLowerCase()} is the first step."
              </blockquote>
              
              <h2>Conclusion</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </>
          )}`;

code = code.replace(placeholderContent, replacementContent);
fs.writeFileSync('src/pages/BlogPost.tsx', code);
console.log('BlogPost patched');
