// @desc    Get all bootcamps
// @routes  GET /api/v1/bootcamps
// @access  public  

exports.getBootcamps = (req, res, next) => { 
    res.status(200).json({
        success: true, 
        msg:'Show all bootcamps available',
        data: {id:1}
    });
}

// @desc    Get single bootcamps
// @routes  GET /api/v1/bootcamps/:id
// @access  public   

exports.getBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true, 
        msg:`Get bootcamp ${req.params.id}`,
    });
}

// @desc     Create bootcamps
// @routes   GET /api/v1/bootcamps
// @access   private ->login with access token 

exports.createBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true, 
        msg:`Create new bootcamps`,
        data: {id:1}
    });
}

// @desc     Update bootcamps
// @routes   GET /api/v1/bootcamps/:id
// @access   private ->login with access token 

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true, 
        msg:`Update bootcamps ${req.params.id}`,
    });
}
 
// @desc   Edit bootcamps
// @routes  GET /api/v1/bootcamps
// @access private ->login with access token 

// exports.editBootcamp = (req, res, next) => {

// }

// @desc   Delete bootcamps
// routes  GET /api/v1/bootcamps/:id
// @access private ->login with access token 

exports.deleteBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true, 
        msg:`Delete bootcamp where id is ${req.params.id}`,
    });
}

