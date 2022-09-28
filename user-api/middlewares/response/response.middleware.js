module.exports.response = (req, res) => {
    try {
        const { response } = req;
        return res.status(200).json({
            id: response
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}