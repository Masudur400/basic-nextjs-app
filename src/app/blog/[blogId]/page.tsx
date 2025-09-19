import React from 'react';

const DynamicBlogPage = async ({ params }: { params : Promise<{ blogId: string }> }) => {

    const { blogId } = await params

    return (
        <div>
            Dynamic Blog Page : {blogId}
        </div>
    );
};

export default DynamicBlogPage;