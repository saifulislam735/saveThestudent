
const RightNav = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Emergency Help Line</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>Call emergency services: 999</li>
                <li>Red Cross emergency line: 01811-111111</li>
                <li>Local police: 999 or local station contact</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Help Post Link</h2>
            <ul className="list-disc pl-6 mb-6">
                <li><a href="https://example.com/help-post-1" target="_blank" rel="noopener noreferrer">Emergency help post link 1</a></li>
                <li><a href="https://example.com/help-post-2" target="_blank" rel="noopener noreferrer">Emergency help post link 2</a></li>
                <li><a href="https://example.com/help-post-3" target="_blank" rel="noopener noreferrer">Emergency help post link 3</a></li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Help Post Location</h2>
            <ul className="list-disc pl-6">
                <li><a href="https://maps.google.com/maps?q=Dhaka,+Bangladesh" target="_blank" rel="noopener noreferrer">Dhaka, Bangladesh - Emergency shelter locations</a></li>
                <li><a href="https://maps.google.com/maps?q=Chittagong,+Bangladesh" target="_blank" rel="noopener noreferrer">Chittagong, Bangladesh - Emergency medical centers</a></li>
                <li><a href="https://maps.google.com/maps?q=Rangpur,+Bangladesh" target="_blank" rel="noopener noreferrer">Rangpur, Bangladesh - Food distribution points</a></li>
            </ul>
        </div>
    );
};

export default RightNav;
