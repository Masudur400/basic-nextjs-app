import React from 'react';

const CatchAllRoutes = async ({ params }: { params : Promise<{ slug: string[] }> }) => {
    
    console.log(await params);

    return (
        <div>
            catch all routes
        </div>
    );
};

export default CatchAllRoutes;