import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='p-5'>
                <h3>When should you use context api?</h3>
                <p>The context API should only be used when we need to communicate state between a large number of components with a high level of nesting. Because the data in one component is usually only relevant to its descendants, sending it in props is more suggestive and nicer.</p>

                <h3>What is custom hook?</h3>
                <p>A custom Hook is a JavaScript function that begins with "use" and can invoke other Hooks. If there is code in a component that we believe should be extracted, either for reuse elsewhere or to keep the component simpler, we can extract it into a function.</p>

                <h3>What is useRef? What is it used for?</h3>
                <p>We may utilize the useRef Hook to keep values between renderings. It may be used to hold a changeable value that does not require a re-render every time it is altered. It may be used to directly access a DOM element.</p>

                <h3>What is useMemo? What is it used for?</h3>
                <p>The useMemo Hook in React returns a memoized value. A memoization is similar to caching a value so that it does not have to be computed. The useMemo Hook is only activated when one of its dependents is updated. This has the potential to boost performance. The useMemo and useCallback Hooks are interchangeable. The major distinction is that useMemo returns a memoized value, whereas useCallback returns a memoized function.</p>
            </div>
        </div>
    );
};

export default Blog;